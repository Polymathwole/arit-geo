'use strict'

module.exports = {
	aritGeo: (listarg)=>{

        if (Array.isArray(listarg))
        {
            if (typeof listarg[0]==="string")
                return 'Array argument should not contain a string!'

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
            else if(listarg.length < 3)
            {
                return 'Minimum of three arguments required';
            }
            else
            {
                for (prev = 1, next = 2; isArith && next < listarg.length; prev++, next++)
                {
                    if (typeof listarg[prev]==="string"||typeof listarg[next]==="string")
                        return 'Array argument should not contain a string!'

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
        else if(listarg===undefined)
        {
            return 'No argument provided';
        }
        else if (!Array.isArray(listarg))
            return 'Argument is not an array';
        	
	}
}