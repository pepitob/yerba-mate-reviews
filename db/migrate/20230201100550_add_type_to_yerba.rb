class AddTypeToYerba < ActiveRecord::Migration[7.0]
  def change
    add_column :yerbas, :type, :string
  end
end
