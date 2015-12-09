class Api::StepsController < ApplicationController
  def index
    render json: Todo.find(params[:todo_id]).steps
  end

  def create
    render json: Step.create!(step_params)
  end

  def destroy
    render json: Step.find(params[:id]).destroy!
  end

  def update
    render json: Step.find(params[:id]).update!(step_params)
  end

  private
  def step_params
    params.require(:step).permit(:step_body, :step_done, :todo_id)
  end
end
