const Equipment = require('../models/equipment')
const db = require('../db/connection')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const getEquipments = async (req, res) => {
    try {
        const equipments = await Equipment.find()
        res.json(equipments)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

const getEquipment = async (req, res) => {
    try {
        const { id } = req.params
        const equipment = await Equipment.findById(id)
        if (equipment) {
            return res.json(equipment)
        }
        res.status(404).json({ message: 'Equipment not found!' })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

const createEquipment = async (req, res) => {
    try {
        const equipment = await new Equipment(req.body)
        await equipment.save()
        res.status(201).json(equipment)
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: error.message })
    }
}

const updateEquipment = async (req, res) => {
    const { id } = req.params
    await Equipment.findByIdAndUpdate(id, req.body, { new: true }, (error, equipment) => {
        if (error) {
            return res.status(500).json({ error: error.message })
        }
        if (!equipment) {
            return res.status(404).json({ message: 'Equipment not found!' })
        }
        res.status(200).json(equipment)
    })
}

const deleteEquipment = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await Equipment.findByIdAndDelete(id)
        if (deleted) {
            return res.status(200).send("Equipment deleted")
        }
        throw new Error("Equipment not found")
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

module.exports = {
    createEquipment,
    getEquipments,
    getEquipment,
    updateEquipment,
    deleteEquipment
}
