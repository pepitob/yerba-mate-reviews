class CreateReviews < ActiveRecord::Migration[7.0]
  def change
    create_table :reviews do |t|
      t.references :user, null: false, foreign_key: true
      t.references :yerba, null: false, foreign_key: true
      t.string :title
      t.text :description

      t.timestamps
    end
  end
end
