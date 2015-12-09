class Step < ActiveRecord::Base
  validates :step_body, presence: true
  validates :step_done, inclusion: { in: [true, false] }

  belongs_to :todo
end
