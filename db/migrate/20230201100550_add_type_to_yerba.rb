class AddCategoryToYerba < ActiveRecord::Migration[7.0]
  def change
    add_column :yerbas, :category, :string
  end
end
