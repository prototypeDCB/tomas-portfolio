#!/bin/bash

for file in *.jpg
  do
  newfile="${file%.*}.webp"
  cwebp -q 80 "${file}" -o "${newfile}"
  #echo "${file} \n ${newfile}"
  done



