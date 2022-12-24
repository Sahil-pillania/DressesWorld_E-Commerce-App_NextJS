export default function handler(req, res) {
  let pincodes = {
    123456: ["Rohtak", "Haryana"],
    126102: ["jind", "Haryana"],
    110003: ["Delhi", "Delhi"],
  };
  res.status(200).json(pincodes);
}
