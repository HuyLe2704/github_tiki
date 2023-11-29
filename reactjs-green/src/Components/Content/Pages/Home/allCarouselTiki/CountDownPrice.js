import { useEffect, useState } from "react";

export function CountDownPrice() {
  const [hours, setHours] = useState("00");
  const [minutes, setMinutes] = useState("00");
  const [seconds, setSeconds] = useState("00");

  useEffect(() => {
    let countdownDate = new Date();
    countdownDate.setHours(countdownDate.getHours() + 6);

    let isMounted = true;

    const interval = setInterval(function () {
      if (isMounted) {
        const now = new Date();
        const diff = countdownDate - now;

        const hours = Math.floor(diff / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);

        setHours(hours.toString().padStart(2, "0"));
        setMinutes(minutes.toString().padStart(2, "0"));
        setSeconds(seconds.toString().padStart(2, "0"));

        if (diff <= 0) {
          clearInterval(interval);
        }
      }
    }, 1000);

    return () => {
      isMounted = false;
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="collectionTitle dealTitle d-flex">
      <span>Giá tốt hôm nay</span>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="countdown-box">
              <div className="countdown-item" id="hours">
                {hours}
              </div>
              <b>:</b>
              <div className="countdown-item" id="minutes">
                {minutes}
              </div>
              <b>:</b>
              <div className="countdown-item" id="seconds">
                {seconds}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
