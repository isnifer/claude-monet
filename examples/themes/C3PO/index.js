import Monet from '../../../'

Monet.create({
  container: {
    borderRadius: 3,
  },
  text: {
    color: 'gold',
  },
}, 'Head')

Monet.create({
  text: {
    color: 'green',
  },
}, 'Head:Green')

Monet.create({
  container: {
    borderWidth: 4,
  },
  text: {
    color: 'gold',
  },
}, 'LeftHand')

Monet.create({
  container: {
    borderColor: '#ff0000',
  },
  text: {
    color: 'gold',
  },
}, 'RightHand')
