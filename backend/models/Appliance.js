import mongoose from 'mongoose'

export default mongoose.model('appliance', {
  applianceType: { type: String, required: true },
  room: { type: String, required: true },
  model: { type: String, required: true },
  connection: Boolean,
  busy: Boolean,
})
