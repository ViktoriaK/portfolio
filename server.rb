require 'sinatra'

get '/' do
  erb :home, layout: :application
end
