class AddDescriptionToYerba < ActiveRecord::Migration[7.0]
  def change
    add_column :yerbas, :description, :text
  end
end
