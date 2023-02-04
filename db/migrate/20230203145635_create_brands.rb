class CreateBrands < ActiveRecord::Migration[7.0]
  def change
    create_table :brands do |t|
      t.string :name
      t.text :description
      t.string :country
      t.string :logo_url

      t.timestamps
    end
  end
end
