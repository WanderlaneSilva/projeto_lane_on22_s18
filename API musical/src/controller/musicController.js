const { response } = require("express");
const apiMusical = require("../model/musicModel");
const { request } = require("http");

const getAllMusics = async (request, response) => {
    try{               
        const allMusic = await apiMusical.find();
        response.status(200).json(allMusic)
        } catch (error) {
        console.log(error)
        response.status(500).json({
        message: error.message
        })
    }}
    
    const getMusicsById = async (req, res) => {
        try {
        const findMusic = await apiMusical.findById(req.params.id)
        res.status(200).json(findMusic)
        } catch (error) {
        console.log(error)
        res.status(500).json({
        message: error.message
        })
    }
    }

const addMusics = async (request, response) =>{
    try {
    const {title, launchYear, favotited, artists} = request.body
    const newMusic = new apiMusical({title, launchYear, favotited, artists})
    const savedmusica = await newMusic.save()
    response.status(201).json({message: "Nova musica adicionada", savedmusica})
    } catch (error) {
    console.log(error)
    response.status(500).json({
    message: error.message
    })
    }
    }
    const updateMusics = async (request, response) =>{
        try {
        const {title,launchYear, favotited, artists} = request.body
        const updated = await apiMusical.findByIdAndUpdate(
        request.params.id, {title,launchYear, favotited, artists})
        response.status(200).json({message: "Musica atualizada e salva", updated})
        
        } catch (error) {
        console.error(error)
        response.status(500).json({message:"não foi possivel atualizar a musica"})
}
    
    }
    const deleteMusic = async (request, response) =>{
        try { const {id} = request.params
        const deleted = await apiMusical.findByIdAndDelete(id)
        const message = `a musica ${deleted.title} foi deletada com sucesso.`
        response.status(200).json({message})
        } catch (error) {
        console.error(error)
        response.status(500).json({message:"não foi possivel deletar "})
    }
    }


module.exports = {
    getAllMusics,
    getMusicsById,
    addMusics,
    updateMusics,
    deleteMusic
}