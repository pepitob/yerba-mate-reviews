# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
require "csv"

filepath = "db/brands.csv"

CSV.foreach(filepath, headers: :first_row, encoding: 'bom|utf-8') do |row|
  Brand.create(name: row["name"], description: row["description"], country: row["country"], logo_url: row["logo"])
end
