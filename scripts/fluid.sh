#!/usr/bin/env bash

cd fixtures/fluid-framework
RUST_BACKTRACE=1 cargo run -- lint --versions
