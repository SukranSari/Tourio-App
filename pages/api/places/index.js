import dbConnect from "../../../db/connect";
import Place from "../../../db/models/Place";

// export default function handler(request, response) {
//   return response.status(200).json(places);
// }

export default async function handler(request, response) {
  await dbConnect();

  if (request.method === "GET") {
    const places = await Place.find();
    response.status(200).json(places);
  }
}
