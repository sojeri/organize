require 'rails_helper'
require 'support/shared_model_examples'

RSpec.describe Broadcast, type: :model do
  describe "model validations" do
    it { should validate_presence_of(:title) }
    it { should validate_length_of(:title).is_at_most(50) }
    it { should validate_presence_of(:description) }
    it { should validate_length_of(:description).is_at_most(500) }
  end

  describe "model associations" do
    it { should have_many(:category_joins) } # FIXME: is this right?
    it { should have_many(:categories).through(:category_joins) }
  end
end
