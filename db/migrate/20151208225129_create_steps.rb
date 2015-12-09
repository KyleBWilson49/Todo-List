class CreateSteps < ActiveRecord::Migration
  def change
    create_table :steps do |t|
      t.integer :todo_id, null: false
      t.string :step_body, null: false
      t.boolean :step_done, default: false

      t.timestamps null: false
    end

    add_index :steps, :todo_id
  end
end
