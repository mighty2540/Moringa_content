// a nested structure

const property = {
    name: "Broadway Apartments",
    address: {
        street1: "11 Broadway",
        city: "New York",
        state: "NY",
        zipCode: "10004"
    },

    amenities: ["pool", "GYM", "Parking"]
};

for (const key in property){
   if (typeof property[key] === 'object') {
    console.log(`Nested data in ${key}:`);
    for (const subKey in property[key]) {
      console.log(`${subKey}: ${property[key][subKey]}`);
    }
  } else {
    console.log(`${key}: ${property[key]}`);
  }
}