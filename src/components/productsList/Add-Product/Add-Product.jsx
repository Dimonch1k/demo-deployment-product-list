import React, { useState } from "react";

import "../../../styles/components/productList/Add-Product/Add-Product.scss";

import Toast from "react-bootstrap/Toast";
import Button from "react-bootstrap/Button";

const AddProduct = ({ addNewProduct }) => {
  const [show, setShow] = useState(false);

  const addProduct = (data) => {
    const file = data.img;
    const reader = new FileReader();
    reader.onload = () => {
      const imageData = reader.result;
      console.log(reader);

      const newProduct = {
        id: Math.random(),
        image: imageData, // base64-encoded image data
        info: data.info,
        expire: data.expires,
        price: data.price,
        more: {
          processor: data.processor,
          ram: data.ram.value,
          storage: data.storage,
          display: data.display,
        },
      };
      addNewProduct({ ...newProduct });
      console.log({ ...newProduct });
    };
    reader.readAsDataURL(file);
  };

  return (
    <>
      {!show && <Button onClick={() => setShow(true)}>Add product</Button>}
      <Toast className="add-product-popup" show={show}>
        <button
          onClick={() => setShow(false)}
          style={{ position: "absolute", top: "5px", right: "5px" }}
        >
          ✕
        </button>
        <Toast.Body>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              const formData = new FormData(e.target);
              const data = Object.fromEntries(formData.entries());
              addProduct(data);
              setShow(false);
            }}
          >
            <fieldset>
              <label htmlFor="img">Upload image:</label>
              <input
                id="img"
                name="img"
                type="file"
                accept="image/*"
                required
              />
            </fieldset>
            <hr />

            <fieldset>
              <label htmlFor="info">Enter info about product:</label>
              <input id="info" name="info" type="text" required />
            </fieldset>
            <hr />

            <fieldset style={{ display: "flex" }}>
              <label style={{ width: "auto", margin: "0" }}>Expires:</label>

              <div className="product-expiration">
                <input id="expires-true" name="expires" type="radio" />
                <label htmlFor="expires">Yes</label>

                <input
                  id="expires-false"
                  name="expires"
                  type="radio"
                  defaultChecked
                />
                <label htmlFor="expires">No</label>
              </div>
            </fieldset>
            <hr />

            {/* Price */}
            <fieldset>
              <label htmlFor="price">Price:</label>
              <input id="price" name="price" type="text" required />
            </fieldset>
            <hr />

            {/* Processor */}
            <fieldset>
              <label htmlFor="processor">Processor:</label>
              <input id="product-processor" name="processor" type="text" />
            </fieldset>
            <hr />

            {/* RAM */}
            <fieldset>
              <label htmlFor="ram">RAM:</label>
              <input id="product-ram" name="ram" type="text" />
            </fieldset>
            <hr />

            {/* Storage */}
            <fieldset>
              <label htmlFor="storage">Storage:</label>
              <input id="product-storage" name="storage" type="text" />
            </fieldset>
            <hr />

            {/* Display */}
            <fieldset>
              <label htmlFor="display">Display:</label>
              <input id="product-display" name="display" type="text" />
            </fieldset>
            <hr />

            {/* Submit Button */}
            <Button type="submit" size="sm" style={{ width: "100%" }}>
              Add Product
            </Button>
          </form>
        </Toast.Body>
      </Toast>
    </>
  );
};

export default AddProduct;
