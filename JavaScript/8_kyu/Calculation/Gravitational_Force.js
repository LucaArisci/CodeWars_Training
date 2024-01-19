/* ----------------------------------------------------------------------------------------

    Your job is to find the gravitational force between two spherical objects (obj1 ,
    obj2).

    input

    Two arrays are given :

    arr_val (value array), consists of 3 elements
    1st element : mass of obj 1
    2nd element : mass of obj 2
    3rd element : distance between their centers

    arr_unit (unit array), consists of 3 elements
    1st element : unit for mass of obj 1
    2nd element : unit for mass of obj 2
    3rd element : unit for distance between their centers

    mass units are :

    kilogram (kg)
    gram (g)
    milligram (mg)
    microgram (μg)
    pound (lb)

    distance units are :

    meter (m)
    centimeter (cm)
    millimeter (mm)
    micrometer (μm)
    feet (ft)

    Note

    value of G = 6.67 × 10−11 N⋅kg−2⋅m2

    1 ft = 0.3048 m

    1 lb = 0.453592 kg

    return value must be Newton for force (obviously)

    μ copy this from here to use it in your solution

---------------------------------------------------------------------------------------- */

/*
    Solution 1
*/

solution = ([m1, m2, d], [u1, u2, ud]) => {
  const conversion = {
    kg: 1,
    g: 1e-3,
    mg: 1e-6,
    μg: 1e-9,
    lb: 0.453592,
    m: 1,
    cm: 1e-2,
    mm: 1e-3,
    μm: 1e-6,
    ft: 0.3048,
  };

  return (
    (6.67e-11 * [m1] * conversion[u1] * [m2] * conversion[u2]) /
    ([d] * conversion[ud]) ** 2
  );
};

/*
    Solution 2
*/

solution = (arr_val, arr_unit) => {
  const G = 6.67 * 10 ** -11;

  switch (arr_unit[0]) {
    case "g":
      arr_val[0] *= 10 ** -3;
      break;
    case "mg":
      arr_val[0] *= 10 ** -6;
      break;
    case "μg":
      arr_val[0] *= 10 ** -9;
      break;
    case "lb":
      arr_val[0] *= 0.453592;
      break;
    default:
      break;
  }

  switch (arr_unit[1]) {
    case "g":
      arr_val[1] *= 10 ** -3;
      break;
    case "mg":
      arr_val[1] *= 10 ** -6;
      break;
    case "μg":
      arr_val[1] *= 10 ** -9;
      break;
    case "lb":
      arr_val[1] *= 0.453592;
      break;
    default:
      break;
  }

  switch (arr_unit[2]) {
    case "cm":
      arr_val[2] *= 10 ** -2;
      break;
    case "mm":
      arr_val[2] *= 10 ** -3;
      break;
    case "μm":
      arr_val[2] *= 10 ** -6;
      break;
    case "ft":
      arr_val[2] *= 0.3048;
      break;
    default:
      break;
  }

  return (G * arr_val[0] * arr_val[1]) / arr_val[2] ** 2;
};
