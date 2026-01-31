import { supabase } from "../config/supabase.js";
export const addVehicle = async(req, res) => {
    const { name, registration_number, allowed_passengers, rate_per_km, owner_id } = req.body;
    const { data, error } = await
    supabase.from("vehicles").insert([{
        name,
        registration_number,
        allowed_passengers,
        rate_per_km,
        owner_id,
        isAvailable: true
    }]);
    if (error) return
    res.status(400).json({ error });
    res.status(201).json(data);
};
export const assignDriver = async(req, res) => {
    const { vehicleId } = req.params;
    const { driver_id } = req.body;
    const { data, error } = await supabase.from("vehicles").update({ driver_id }).eq("id", vehicleId)
    if (error) return
    res.status(400).json({ error });
    res.json(data);

};