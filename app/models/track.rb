# == Schema Information
#
# Table name: tracks
#
#  id                 :integer          not null, primary key
#  track_name         :string           not null
#  user_id            :integer          not null
#  description        :text
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#  image_file_name    :string
#  image_content_type :string
#  image_file_size    :integer
#  image_updated_at   :datetime
#  audio_file_name    :string
#  audio_content_type :string
#  audio_file_size    :integer
#  audio_updated_at   :datetime
#

class Track < ApplicationRecord
  validates :track_name, :user_id, presence: true

  has_attached_file :image, styles: { medium: "300x300>", thumb: "100x100>" }, default_url: "/images/:style/missing.png"
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\z/

  has_attached_file :audio, validate_media_type: false
  validates_attachment_presence :audio
  validates_attachment_content_type :audio, :content_type => [ 'audio/mpeg', 'audio/x-mpeg', 'audio/mp3', 'audio/x-mp3', 'audio/mpeg3', 'audio/x-mpeg3', 'audio/mpg', 'audio/x-mpg', 'audio/x-mpegaudio' ]

  belongs_to :user

  validate :reject_string

  def self.get_tracks_by_user_id(user_id)
    Track.where(user_id: user_id)
  end

  def reject_string
    self.audio = nil if self.audio == "null"

  end

end
