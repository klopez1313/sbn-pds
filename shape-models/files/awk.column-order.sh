#!/bin/awk -f
BEGIN {
    # begin block
}
{
    # swap y and z axes
    x=$2;
    y=$4;
    z=$3;

    # remove newlines from end of line
    gsub(/\\n/,"",x)
    gsub(/\\n/,"",y)
    gsub(/\\n/,"",z)

    print $1, x, y, z;
}
END {
    # end block
}
