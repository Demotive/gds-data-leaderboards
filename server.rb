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

# Policy data
get '/policies' do
  cache_control :public, :max_age => 20
  http = Net::HTTP.new('www.gov.uk', 443)
  http.use_ssl = true
  req = Net::HTTP::Get.new("/performance/dashboard/government/content-engagement-detail.json")
  response = http.request(req)
  response.body
end

#===========

# Policy data
get '/government' do
  cache_control :public, :max_age => 20
  http = Net::HTTP.new('www.gov.uk', 443)
  http.use_ssl = true
  req = Net::HTTP::Get.new("/performance/dashboard/content-engagement-detail.json")
  response = http.request(req)
  response.body
end

#===========

# Top 5 licences
get '/licences' do
  cache_control :public, :max_age => 20
  http = Net::HTTP.new('www.gov.uk', 443)
  http.use_ssl = true
  req = Net::HTTP::Get.new("/performance/licensing/api/application?group_by=licenceUrlSlug&collect=licenceName&limit=5&sort_by=_count%3Adescending")
  response = http.request(req)
  response.body
end

