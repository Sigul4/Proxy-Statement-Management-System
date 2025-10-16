"use client"

import ProfileLinkButton from "../profile-link-button"

export default function PhotoActions() {
	function handleUploadPhoto() {}

	function handleDeletePhoto() {}

	return (
		<>
			<ProfileLinkButton label="Delete photo" onClick={handleDeletePhoto} />
			<ProfileLinkButton label="Upload new" onClick={handleUploadPhoto} />
		</>
	)
}
