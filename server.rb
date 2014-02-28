require 'rubygems'
require 'sinatra'
require 'json'
require 'rack-cache'
require 'net/http'
require 'net/https'
#require 'active_support/core_ext/hash'
#require 'active_support/core_ext/object'

use Rack::Cache
set :public_folder, 'public'
set :bind, '0.0.0.0'

get '/' do
  File.read(File.join('public', 'index.html'))
end

#===========

# Content data
get '/content' do
  cache_control :public, :max_age => 20
  http = Net::HTTP.new('www.performance.service.gov.uk', 443)
  http.use_ssl = true
  req = Net::HTTP::Get.new("/data/govuk/most_viewed?limit=5&sort_by=pageviews:descending")
  response = http.request(req)
  response.body
end

#===========

# Trending data
get '/trending' do
  cache_control :public, :max_age => 20
  http = Net::HTTP.new('www.performance.service.gov.uk', 443)
  http.use_ssl = true
  req = Net::HTTP::Get.new("/data/govuk/trending?limit=5&sort_by=percent_change:descending")
  response = http.request(req)
  response.body
end

#===========

# Policy data
get '/policies' do
  cache_control :public, :max_age => 20
  http = Net::HTTP.new('www.performance.service.gov.uk', 443)
  http.use_ssl = true
  req = Net::HTTP::Get.new("/data/govuk/most_viewed_policies?limit=5&sort_by=pageviews:descending")
  response = http.request(req)
  response.body
end

#===========

# News data
get '/news' do
  cache_control :public, :max_age => 20
  http = Net::HTTP.new('www.performance.service.gov.uk', 443)
  http.use_ssl = true
  req = Net::HTTP::Get.new("/data/govuk/most_viewed_news?limit=5&sort_by=pageviews:descending")
  response = http.request(req)
  response.body
end