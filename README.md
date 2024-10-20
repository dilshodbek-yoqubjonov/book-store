# book-store
Bookstore Management System
Description
This project is a simple bookstore management system with the following models:

Models:
Admin:
Fields: id, name, username, password.

Author:
Fields: id, fullname.

Category:
Fields: id, name.

Book:
Fields: id, title, description, count, price, authorId, categoryId, image.

Order:
Fields: bookId, clientName, clientPhone, count (default 1), address, totalPrice (includes a fixed 30,000 UZS delivery fee).

Functionality:
Admin Page:
Admin login is required to manage authors, categories, and books.

AUTHORS:

View authors (GET).
Add new authors (POST).
Only admin can add authors.
CATEGORIES:

View categories (GET).
Add new categories (POST).
Only admin can add categories.
BOOKS:

View books (GET).
Add new books (POST).
Only admin can add books.
ORDERS:
Users can place orders by providing their personal details (name, phone, address) and the system calculates the total price including delivery. Admin can view the list of all orders.
