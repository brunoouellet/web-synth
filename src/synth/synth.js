import Synth from 'tone/Tone/instrument/Synth';
import PolySynth from 'tone/Tone/instrument/PolySynth';

const synth = new PolySynth(4, Synth).toMaster();

export default synth;
