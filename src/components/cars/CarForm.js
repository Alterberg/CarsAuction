import React from "react";
import PropTypes from "prop-types";
import TextInput from "../common/TextInput";
import SelectInput from "../common/SelectInput";

const CarForm = ({
  car,
  sellers,
  onSave,
  onChange,
  saving = false,
  errors = {}
}) => {
  return (
    <form onSubmit={onSave}>
      <h2>{car.id ? "Edit" : "Add"} Car</h2>
      {errors.onSave && (
        <div className="alert alert-danger" role="alert">
          {errors.onSave}
        </div>
      )}
      <TextInput
        name="model"
        label="Model"
        value={car.model}
        onChange={onChange}
        error={errors.model}
      />

      <SelectInput
        name="sellerId"
        label="Seller"
        value={car.sellerId || ""}
        defaultOption="Select Seller"
        options={sellers.map(seller => ({
          value: seller.id,
          text: seller.name
        }))}
        onChange={onChange}
        error={errors.seller}
      />

      <TextInput
        name="category"
        label="Category"
        value={car.category}
        onChange={onChange}
        error={errors.category}
      />

      <button type="submit" disabled={saving} className="btn btn-primary">
        {saving ? "Saving..." : "Save"}
      </button>
    </form>
  );
};

CarForm.propTypes = {
  sellers: PropTypes.array.isRequired,
  car: PropTypes.object.isRequired,
  errors: PropTypes.object,
  onSave: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  saving: PropTypes.bool
};

export default CarForm;
