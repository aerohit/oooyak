class StaticPagesController < ApplicationController
  def home
  end

  def reactcomments
  end

  def jsontestdata
    data = [
	{"author" =>  "Pete Hunt", "text" =>  "This is one bold comment"},
	{"author" =>  "Jordan Walke", "text" =>  "This is *another* comment"}
    ]
    render json: data
  end
end
