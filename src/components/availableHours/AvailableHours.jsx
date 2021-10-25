import "./availableHours.scss";

const AvailableHours = () => {
  return (
    <div className="hours-container">
      <form action="">
        <div class="inputGroup">
          <input id="radio1" name="radio" type="radio" />
          <label for="radio1">8:00HS</label>
        </div>
        <div class="inputGroup nonAvailable">
          <input id="radio2" name="radio" disabled type="radio" />
          <label for="radio2">9:00HS</label>
        </div>
        <div class="inputGroup">
          <input id="radio3" name="radio" type="radio" />
          <label for="radio3">10:00HS</label>
        </div>
        <div class="inputGroup nonAvailable">
          <input id="radio6" name="radio" type="radio" />
          <label for="radio6">10:00HS</label>
        </div>
        <div class="inputGroup">
          <input id="radio5" name="radio" tepe="radio" />
          <label for="radio5">10:00HS</label>
        </div>
        <div class="inputGroup">
          <input id="radio4" name="radio" type="radio" />
          <label for="radio4">10:00HS</label>
        </div>
      </form>
    </div>
  );
};

export default AvailableHours;
