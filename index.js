'use strict'

module.exports = {
	aritGeo: (listarg)=>{

        if (Array.isArray(listarg))
        {
            let prev, next;
            let diff = (listarg[1]-listarg[0]);
            let ratio = listarg[1]/listarg[0];
            let rem = listarg[1]%listarg[0];
            let isArith = true;
            let isGeo = (isFinite(ratio) && ratio !== 0 && rem===0);
    
            if (listarg.length < 1)
            {
                return 0;
            }
            else
            {
                for (prev = 1, next = 2; isArith && next < listarg.length; prev++, next++)
                {
                    if (isArith && (listarg[next] - listarg[prev] !== diff))
                        isArith = false;
                    
                    if ((next===listarg.length-1) && isArith === true)
                        return 'Arithmetic'
                }

                if (isGeo)
                {
                    for (prev = 1, next = 2; isGeo && next < listarg.length; prev++, next++)
                    {
                        if (listarg[next] / listarg[prev] !== ratio)
                            isGeo = false;

                        if (isGeo===false)
                            return -1;

                        if ((next===listarg.length-1) && isGeo)
                            return 'Geometric'
                    }
                }
                else
                    return -1;
            }
        }		
	}
}

console.log(module.exports.aritGeo([1,2,4]))