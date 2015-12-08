class Api::TodosController < ApplicationController
  def index
    render json: Todo.all
  end

  def show
    render json: Todo.find(params[:id])
  end

  def create
    render json: Todo.create!(todo_params)
  end

  def destroy
    render json: Todo.find(params[:id]).destroy!
  end

  def update
    render json: Todo.find(params[:id]).update!(todo_params)
  end

  private
  def todo_params
    params.require(:todo).permit(:title, :body, :done)
  end
end
