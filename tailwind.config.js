module.exports = {
   purge: {
      enabled: true,
      content: ['./templates/partials/*.hbs', './templates/views/*.hbs'],
   },
   theme: {
      extend: {
         margin: {
            '-30p': '-30%',
            '30p': '30%',
            '-40p': '-40%',
            '40p': '40%',
            '-50p': '-50%',
            '50p': '50%',
         },
         opacity: {
            99: '.99',
            98: '.98',
            97: '.97',
            96: '.96',
            95: '.95',
            90: '.90',
            10: '.1',
            20: '.2',
            30: '.3',
            40: '.4',
            50: '.5',
            60: '.6',
            70: '.7',
            80: '.8',
         },
         colors: {
            color: {
               one: 'var(--bg-color-one)',
               two: 'var(--bg-color-two)',
               three: 'var(--bg-color-three)',
            },
            colorT: {
               one: 'var(--text-colorT-one)',
               two: 'var(--text-colorT-two)',
               three: 'var(--text-colorT-three)',
            },
         },
      },
   },
   variants: {},
   plugins: [],
};
