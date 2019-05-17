class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :email, null: false
      t.integer :failed_sign_in_attempts, default: 0
      t.string :handle, null: false
      t.datetime :last_signed_in_at
      t.string :password_digest
      t.string :password_reset_digest
      t.datetime :password_reset_sent_at
      t.string :remember_digest
      t.integer :sign_in_count, default: 0
    end
    add_index :users, :email, unique: true
    add_index :users, :handle, unique: true
  end
end
