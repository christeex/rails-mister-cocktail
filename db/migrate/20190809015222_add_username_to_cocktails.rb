class AddUsernameToCocktails < ActiveRecord::Migration[5.2]
  def change
    add_column :cocktails, :username, :string
  end
end
