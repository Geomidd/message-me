class SessionsController < ApplicationController
  before_action :logged_in_redirect, only: [:new, :create]

  def new
  end

  def create
    puts 'Handling this stuff here'
    user = User.find_by(username: params[:session][:username])
    if user && user.authenticate(params[:session][:password])
      session[:user_id] = user.id
      flash[:notice] = "You have succcesfully logged in"
      redirect_to root_path
    else
      flash[:alert] = "There was something wrong with your login information"
      # TODO: Fix this to work with turbostreams or whatever Rails 7 is
      redirect_to login_path
    end
  end

  def destroy
    session[:user_id] = nil
    flash[:notice] = "You have succcesfully logged out"
    redirect_to login_path
  end

  private

  def logged_in_redirect
    if logged_in?
      flash[:alert] = "You are already logged in"
      redirect_to root_path
    end
  end
end
