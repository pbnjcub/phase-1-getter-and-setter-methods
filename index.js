// Add your Circle class here
// class Bird {
//     #phrase;
  
//     constructor(name) {
//       this.name = name;
//     }
  
//     set phrase(phrase) {
//       this.#phrase = phrase;
//     }
  
//     get speak() {
//       return `${this.name} says ${this.#phrase || "squawk"}`;
//     }
//   }
  
//   const daffy = new Bird("Daffy");
//   daffy.speak; // => 'Daffy says squawk'
//   daffy.phrase = "it's rabbit season!";
//   daffy.speak; // => 'Daffy says it's rabbit season!'

// - First, let's create a class of `Circle`
class Circle {
    // - `Circle` will accept 1 parameter, `radius`, and use `this.radius` to store the
//   value
    constructor(radius) {
        this.radius = radius
    }
    // - Define getter methods for `diameter`, `circumference`, and `area` which
    //  will calculate each value using `this.radius` and pi
    get diameter() {
        return 2 * this.radius
    }

    get circumference() {
        return Math.PI * this.diameter
    }

    get area() {
        return Math.PI * this.radius * this.radius
    }
// - Define setter methods for `diameter`, `circumference`, and `area` which
//   will accept values for each calculation, calculate the _radius_ based on the
//   input value and _set_ `this.radius` accordingly
//   - **Hint:** You will need to use [Math.sqrt()][math.sqrt()] in your `area`
//     setter method
    set diameter(newDiam) {
        this.radius = newDiam / 2
    }

    set circumference(newCirc) {
        this.radius = newCirc / (2 * Math.PI)
    }

    set area(newArea) {
        this.radius = Math.sqrt(newArea / Math.PI)
    }

}



// All instances of `Circle` should be able to calculate the `diameter`,
// `circumference`, and `area` based on the given `radius`. All instances should
// also be able to set `this.radius` by setting a value to `diameter`,
// `circumference`, or `area`.
