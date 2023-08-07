const mongoose = require("mongoose");
const musicSchema = mongoose.Schema(
    {_id: {
        type: mongoose.Schema.Types.ObjectId,
        default: () => new mongoose.Types.ObjectId(),
    },
        title: {
            type: String,
            required: true,
            unique: true,
        },
        launchYear: {
            type: Number,
            required: true,
        },
        favotited: {
            type: Boolean,
            required: true,
        },
        artists: {
            type: [String],
            }
        },
    {
        versionkey: false
    }
)
const model = mongoose.model("song:", musicSchema)
module.exports = model