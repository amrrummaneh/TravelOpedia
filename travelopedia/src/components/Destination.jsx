import { useState } from "react";
import {
  useDeleteDestinationMutation,
  useUpdateDestinationMutation,
} from "../api/destinationApi";
function Destination({ destination }) {
  const [deleteDestination] = useDeleteDestinationMutation();
  const [updateDestination] = useUpdateDestinationMutation();
  const [isUpdating, setIsUpdating] = useState(false);
  const [newCity, setNewCity] = useState("");
  const [newCountry, setNewCountry] = useState("");

  const handleEditState = () => {
    setNewCity(destination.city);
    setNewCountry(destination.country);
    setIsUpdating(true);
  };

  const handleEditEnd = () => {
    setNewCity("");
    setNewCountry("");
    setIsUpdating(false);
  };

  const handleUpdate = () => {
    let city = "",
      country = "";

    if (newCity == "") {
      city = destination.city;
    } else {
      city = newCity;
    }

    if (newCountry == "") {
      country = destination.country;
    } else {
      country = newCountry;
    }
    console.log(city);
    console.log(country);
    updateDestination({
      id: destination.id,
      city: city,
      country: country,
      daysNeeded: destination.daysNeeded,
    });

    setNewCity("");
    setNewCountry("");
    setIsUpdating(!isUpdating);
  };

  return (
    <div className="row py-1 border-top">
      <div className="row col-6 py-2">
        <div className="col-6">
          {isUpdating ? (
            <input
              type="text"
              name="city"
              className="form-control"
              placeholder="city..."
              value={newCity}
              onChange={(e) => setNewCity(e.target.value)}
            />
          ) : (
            <span>{destination.city}</span>
          )}
        </div>
        <div className="col-6">
          {isUpdating ? (
            <input
              type="text"
              name="country"
              className="form-control"
              placeholder="country..."
              value={newCountry}
              onChange={(e) => setNewCountry(e.target.value)}
            />
          ) : (
            <span>{destination.country}</span>
          )}
        </div>
      </div>
      <div className="col-2 text-info py-2">{destination.daysNeeded} days</div>
      <div className="col-4">
        {isUpdating && (
          <span>
            <button
              className="btn  btn-warning m-1"
              onClick={() => handleEditEnd()}
            >
              Cancel
            </button>
            <button
              className="btn  btn-success m-1"
              onClick={() => handleUpdate()}
            >
              Update
            </button>
          </span>
        )}
        {!isUpdating && (
          <span>
            <button
              className="btn btn-warning m-1"
              onClick={() => handleEditState()}
            >
              Edit
            </button>
            <button
              className="btn  btn-danger  m-1"
              onClick={() => deleteDestination({ id: destination.id })}
            >
              Delete
            </button>
          </span>
        )}
      </div>
    </div>
  );
}

export default Destination;
