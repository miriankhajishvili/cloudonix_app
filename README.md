# Product Management Application

## Overview

The Product Management Application is an Angular-based web application designed to facilitate the creation, editing, and management of product information for e-commerce platforms. It leverages Angular Material for styling and responsive design, ensuring a seamless user experience across various devices and screen sizes.

## Features

- **Product Form**: A comprehensive form for creating and editing products with fields for product name, SKU, cost, description, and profile attributes.
- **Custom Properties**: Dynamic key-value editor for adding, editing, and managing custom properties for products.
- **Responsive Design**: Ensures optimal user experience on both desktop and mobile devices.
- **Angular Material**: Utilizes Angular Material components for a modern and consistent UI.
- **Form Validation**: Built-in validation for required fields and specific input formats.

## Form Fields

1. **Product Name**: A required text field for the product name.
2. **SKU**: A text field for the Stock Keeping Unit (SKU), which is editable during product creation and read-only during product editing.
3. **Cost**: A number field for the product cost, supporting positive values with up to two decimal points.
4. **Description**: A text field for the product description.
5. **Profile Attributes**:
   - **Type**: A dropdown field with options 'furniture', 'equipment', 'stationary', and 'part'.
   - **Available**: A checkbox indicating the product's availability status.
   - **Backlog**: A number field for the backlog amount.
6. **Custom Properties**: A dynamic section for adding custom key-value pairs, where keys are immutable during editing and properties cannot be deleted in edit mode.

## Usage

### Creating a Product

1. Click on the "Create Product" button.
2. Fill out the product form, ensuring all required fields are completed.
3. Add any custom properties as needed.
4. Click the "Create Product" button to save the new product.

### Editing a Product

1. Select a product to edit from the product list.
2. Modify the fields as necessary. The SKU field will be read-only.
3. Custom properties can be edited, but keys cannot be changed, and properties cannot be deleted.
4. Click the "Edit Product" button to save changes.

### Responsive Design

The application is designed to be responsive and adjusts its layout based on screen size:
- On larger screens, form fields are arranged in a multi-column layout.
- On smaller screens, form fields stack vertically for ease of use.

## Code Structure

- **HTML**: Structured with Angular Material components for forms and responsive layout.
- **CSS**: Uses Flexbox and media queries to ensure responsiveness.
- **TypeScript**: Handles form controls, validation, and dynamic custom properties.


