document.addEventListener("DOMContentLoaded", () => {
    const homeElement = document.querySelector(".home");
    const alligner = document.querySelector(".alligner");
    const allignerChild = document.querySelector(".alligner-item--centerright");
    window.addEventListener("scroll", function () {
        const value = window.scrollY;
        const clampedValue = clamp(value, 0, homeElement.clientHeight / 1.5);
        const mappedValue = Math.min(clampedValue / (homeElement.clientHeight / 1.5), 1);
        //const value = homeElement.scrollY;
        // Apply transformations to titles
        alligner.style.marginTop = (mappedValue * 500) + "px";
        if(mappedValue > 0.5)
        {
            allignerChild.style.color = "white";
        }
        else
        {
            allignerChild.style.color = "rgb(22, 37, 44)"
        }

    });
  });

  function clamp(number, min, max) {
    return Math.max(min, Math.min(number, max));
  }