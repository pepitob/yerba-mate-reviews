class CreateYerbas < ActiveRecord::Migration[7.0]
  def change
    create_table :yerbas do |t|
      t.string :name
      t.string :country
      t.float :overall_rating

      t.timestamps
    end
  end
end
