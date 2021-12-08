class EventsController < ApplicationController

  layout 'application'

  def index
  end

  # def new
  #   @event = Event.new
  #   @event.event_date = Time.now
  # end

  # def create
  #   @event = Event.new(event_params)
  #   if @event.save
  #     flash[:notice] = "Event successfully added!"
  #     redirect_to events_path
  #   else
  #     flash[:alert] = "Event was not added!"
  #     render :new
  #   end
  # end

  # def edit
  #   @event = Event.find(params[:id])
  # end

  # def update
  #   @event = Event.find(params[:id])
  #   if @event.update(event_params)
  #     flash[:notice] = "Event successfully updated!"
  #     redirect_to events_path
  #   else
  #     flash[:alert] = "Event was not updated!"
  #     render :edit
  #   end
  # end

  # def destroy
  #   @event = Event.find(params[:id])
  #   @event.destroy
  #   flash[:notice] = "Event successfully deleted!"
  #   redirect_to events_path
  # end

  # def index
  #   @events = Event.all
  # end

  # private
  # def event_params
  #   params.require(:event).permit(:name, :description, :event_date, :venue_id)
  # end
end
