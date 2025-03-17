import { createSwapy } from "swapy";
import { testStore } from "./main";

const clickable = document.querySelector("#clickable");

console.log(testStore.parts);
console.log(testStore.addParts("Ronnie Carson"));
console.log(testStore.parts);

if (clickable) {
  clickable.addEventListener("click", (e: any) => {
    const el = e.target;
    const isExpand = el.classList.contains("expanded");
    console.log(isExpand);
    if (isExpand) {
      el.classList.remove("expanded");
    } else {
      el.classList.add("expanded");
    }
  });
}

const container = document.querySelector("#swapit");

if (container) {
  const swappy = createSwapy(container as HTMLElement, {
    // animation:'dynamic',
  });

  swappy.onBeforeSwap((event) => {
    console.log("beforeSwatp", event);
    return true;
  });
  swappy.onSwapStart((event) => {
    console.log("start", event);
  });
  swappy.onSwapEnd((event) => {
    console.log("end", event);
  });
  console.log(swappy);
  // swappy.enable(true)
}
