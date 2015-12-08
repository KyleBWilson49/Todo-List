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
    render json: Todo.destroy!(params[:id])
  end


  private
  def todo_params
    params.require(:todo).permit(:title, :body, :done)
  end
end
