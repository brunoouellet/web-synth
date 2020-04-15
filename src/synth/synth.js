import Tone from 'tone'

const synth = new Tone.PolySynth(4, Tone.Synth).toMaster()

export default synth
