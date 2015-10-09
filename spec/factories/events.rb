FactoryGirl.define do
  factory :event do
    title      "Shark Attack"
    start_time Time.parse("Oct 8th 2015 11am")
    end_time   Time.parse("Oct 8th 2015 11pm")
    google_id  "what a cool, unique id number"
  end
end