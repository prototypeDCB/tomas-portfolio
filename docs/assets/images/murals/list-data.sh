#!/bin/bash

for file in *.webp
  do
  echo "../../assets/images/murals/${file}"
  file ${file}
  echo "##############################"
  done